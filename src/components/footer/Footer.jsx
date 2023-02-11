import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container  text-white w-[100vw] flex sm:justify-center">
        <div className="row flex w-[70vw] justify-around">
          <div className="col-md-6">
            <p>&copy; 2023 Innovate. All Rights Reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-md-right flex w-[20vw] gap-4">
              <li className="list-inline-item">
                <a href="#">About</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer