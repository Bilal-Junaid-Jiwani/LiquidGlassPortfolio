import { type Express } from "express";
import { createServer, type Server } from "http";
import { contactMessageSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
    app.get("/api/health", (_req, res) => {
        res.json({ status: "ok" });
    });

    app.post("/api/contact", async (req, res) => {
        try {
            const data = contactMessageSchema.parse(req.body);
            // TODO: Implement actual storage or email sending
            console.log("Contact message received:", data);
            res.json({ success: true, message: "Message received" });
        } catch (error) {
            res.status(400).json({ success: false, message: "Invalid data", error });
        }
    });

    const httpServer = createServer(app);
    return httpServer;
}
