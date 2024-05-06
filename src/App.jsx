import { useEffect } from 'react';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import ThaiVoiceover from './pages/ThaiVoiceover';
import MainPage from './pages/MainPage';
import Testimonials from './pages/Testimonials';

const App = () => {
  useEffect(() => {
    // Insert the gtag.js script
    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=AW-752447096`;
    document.head.appendChild(scriptTag);

    // Insert the inline script to initialize gtag
    const scriptInline = document.createElement('script');
    const inlineCode = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-752447096');
    `;
    scriptInline.textContent = inlineCode;
    document.head.appendChild(scriptInline);

    return () => {
      // Clean up the scripts when the component unmounts
      document.head.removeChild(scriptTag);
      document.head.removeChild(scriptInline);
    };
  }, []);


  // Line 1 and
  //    after "const App = () => {",
        // attempting to add 'Google Analytics script tag'.

        // ***Need to test later. - See the Room "G - Analytics Tag" in ChatGPT***

//         1.	Development Environment Testing:
// •	Use the development or staging version of your website to deploy the new changes.
// •	Make sure your local or staging server is running and visit the site.
// •	Check the Network tab in your browser's Developer Tools (F12 or right-click → Inspect → Network) to see if there is a request to https://www.googletagmanager.com/gtag/js when the site loads.
// •	Also, look for the collect event, which indicates data being sent to Google Analytics.
// 2.	Google Analytics Realtime Reports:
// •	Log into your Google Analytics account.
// •	Go to the Realtime section to see if your visit is being recorded.
// •	Make a few interactions with your site to see if they are being captured as events in the Realtime report.
// 3.	Google Tag Assistant:
// •	Install the Google Tag Assistant browser extension, which can help you verify the installation.
// •	Navigate to your site with the extension enabled, and it should indicate whether Google Analytics is detected and working properly.
// 4.	Console Logs:
// •	Temporarily add console.log statements in the useEffect to make sure the code runs without errors.
// •	For example:
// javascript - Copy code
// useEffect(() => {
//   console.log("Initializing Google Analytics");
//   // rest of the code...
// }, []);
// •	When you load your site, check the browser's console for any messages or errors.
// 5.	Deployment to a Test Domain/Subdomain:
// •	If possible, deploy your site to a test domain or subdomain that is accessible online.
// •	This is a more accurate representation of how the site will behave in production.
// 6.	Use Google Analytics Debug Mode:
// •	Google Analytics provides a debug version of the analytics.js library that logs detailed messages to the console, which can help identify any tracking issues.
// 7.	Exclude IP Addresses:
// •	If your analytics view is set up to exclude certain IP addresses (like your own to prevent skewing data), ensure you’re not testing from an excluded IP.







  
  
  return (
    <div className="bg-teal-600 text-white">
      <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/thai-voiceover" element={<ThaiVoiceover />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>

      <Footer />

      {/* Floating Button */}
      {/* <button
        onClick={scrollToContact}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        To Contact
      </button> */}
    </div>
  );
}

export default App;
