import data from '../assets/index-assets';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-red-500 px-[50px] py-[30px] text-base">
      <img src={data.myLogo} className='w-36' />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* <h2>Contact Info</h2> */}
        <ul>
          <li>
            <i></i> Based in: Thailand
          </li>
          <li>
            <i></i> Email:{" "}
            <a href="mailto:info@synclingo360.com">pawin1110@gmail.com</a>
          </li>
          {/* <li>
            <i></i> Tel:&nbsp;<a href="tel:447875727734">+44 7875 727734</a>
          </li> */}
        </ul>
        <div className="col-span-1">
          <ul>
            <li>
              <i></i> LinkedIn:&nbsp;
              <a
                href="https://www.linkedin.com/in/pawin-chandrathip/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pawin Chandrathip
              </a>
            </li>
            <li>
              <i></i> Business hours: Welcome
            </li>
            {/* <li>
              <span className="ml-5">09:00am - 17:00pm GMT</span>
            </li> */}
          </ul>
        </div>
      </div>
      <div>
        <div className="text-center sm:text-right">
          <p>
            {/* © 2022 SyncLingo360. All rights reserved. */}
            <br />
            <a href="" rel="noopener noreferrer" target="_blank">
              Back to Top
            </a>
            .
            <br />
            <a>Website developed by Myself and Diego Garcia.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
