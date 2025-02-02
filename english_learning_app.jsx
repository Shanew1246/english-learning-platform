import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Home = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold">Welcome to English Learning Platform</h1>
    <p className="mt-4 text-lg">Learn English online with experienced tutors.</p>
    <Link to="/booking">
      <Button className="mt-6">Book a Lesson</Button>
    </Link>
  </div>
);

const Booking = () => (
  <div className="p-8 max-w-md mx-auto">
    <h2 className="text-2xl font-semibold">Book a Lesson</h2>
    <Card className="mt-4 p-4">
      <CardContent>
        <Input type="text" placeholder="Your Name" className="mb-4" />
        <Input type="email" placeholder="Your Email" className="mb-4" />
        <Input type="date" className="mb-4" />
        <Textarea placeholder="Additional Notes" className="mb-4" />
        <Input type="text" placeholder="Card Number" className="mb-4" />
        <Input type="text" placeholder="Expiry Date (MM/YY)" className="mb-4" />
        <Input type="text" placeholder="CVV" className="mb-4" />
        <Button className="w-full">Submit Payment & Book</Button>
      </CardContent>
    </Card>
  </div>
);

const App = () => (
  <Router>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <nav className="p-4 shadow-md w-full bg-white flex justify-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/booking">Book a Lesson</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </motion.div>
    </div>
  </Router>
);

export default App;
