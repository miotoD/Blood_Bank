import React from "react";

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <footer className="grid gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-800">
              Company
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>About us</li>
              <li>Company History</li>
              <li>Our Team</li>
              <li>Our Vision</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-800">
              Our Stores
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>Kathmandu</li>
              <li>Pokhara</li>
              <li>Jhapa</li>
              <li>Jumla</li>
              <li>Butwal</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-800">
              Services
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>Pre Book Blood</li>
              <li>Blood Donation Education</li>
              <li>Donor Eligibility Check</li>
              <li>Ambulance Services</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-800">Legal</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
              <li>Media Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-800">
              Social Links
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
        </footer>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Blood Bank. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
