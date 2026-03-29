/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Placeholder routes for the rest of the sitemap */}
          <Route path="destinations" element={<div className="pt-32 text-center h-screen">Destinations Page</div>} />
          <Route path="packages" element={<div className="pt-32 text-center h-screen">Packages Page</div>} />
          <Route path="custom-trip" element={<div className="pt-32 text-center h-screen">Custom Trip Builder</div>} />
          <Route path="about" element={<div className="pt-32 text-center h-screen">About Us</div>} />
          <Route path="book" element={<div className="pt-32 text-center h-screen">Booking Page</div>} />
          <Route path="*" element={<div className="pt-32 text-center h-screen">404 Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
