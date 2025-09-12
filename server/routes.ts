import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSignupSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist signup endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertWaitlistSignupSchema.parse(req.body);
      
      // Save to storage
      const signup = await storage.createWaitlistSignup(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Successfully joined the waitlist!",
        id: signup.id 
      });
    } catch (error) {
      console.error("Error creating waitlist signup:", error);
      
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all waitlist signups (for admin purposes)
  app.get("/api/waitlist", async (req, res) => {
    try {
      const signups = await storage.getAllWaitlistSignups();
      res.json({ success: true, data: signups });
    } catch (error) {
      console.error("Error fetching waitlist signups:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
