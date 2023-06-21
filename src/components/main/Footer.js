import React from "react";
import { UilFlower } from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <UilFlower size={60} color="#F4F498" />

          <div>
            <p className="text-3xl font-semibold">heyDaisy</p>
            <p>Learn. Share. Communicate.</p>
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="about"target="_blank" className="link link-hover hover:scale-110">About us</a>
          <a href="contact" className="link link-hover hover:scale-110">Contact</a>
          <a href="register"target="_blank" className="link link-hover hover:scale-110">Blog</a>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="register"target="_blank" className="link link-hover hover:scale-110">Legal</a>
          <a href="register"target="_blank" className="link link-hover hover:scale-110">Terms of use</a>
          <a href="register"target="_blank"className="link link-hover hover:scale-110">Privacy policy</a>
          <a href="register"target="_blank" className="link link-hover hover:scale-110">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">User</span>
          <a href="register"target="_blank" className="link link-hover hover:scale-110">Register</a>
          <a href="login" className="link link-hover hover:scale-110">Login</a>
          <a href="faq" className="link link-hover hover:scale-110">FAQs</a>
          <a href="download" className="link link-hover hover:scale-110">Downloads</a>
        </div>
      </footer>
    </div>
  );
}
