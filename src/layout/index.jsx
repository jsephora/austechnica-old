import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <div className="ausTechnica-Logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.5 8.91" width="160px" height="20px">
          <g id="b074fa2e-8a94-42a8-849e-dd9db0efff69" data-name="Layer 2">
            <g id="b06df1c5-465e-4b11-83ea-1421b469f179" data-name="Layer 1">
              <path d="M8.71,8.39v.39h-4V8.39c.82-.12,1-.35.65-1.25L5,5.94H2.23L1.84,7.08c-.32,1-.18,1.18.65,1.31v.39H0V8.39c.64-.1.82-.28,1.19-1.32L3.62.31H5.09L7.55,7.15C7.9,8.1,8.09,8.29,8.71,8.39Zm-3.94-3L3.59,1.92,2.4,5.43Z" />
              <path d="M11.45,6.83c0,.78.37,1.19,1,1.19a1.12,1.12,0,0,0,1-.53V4.17c0-.37-.05-.46-.37-.56l-.35-.1V3.14l2.65-.32V7.54c0,.36.05.45.38.56l.33.1v.36l-2.62.29V7.79a2.12,2.12,0,0,1-2,1.12A1.77,1.77,0,0,1,9.52,7V4.17c0-.37-.06-.46-.38-.56l-.34-.1V3.14l2.65-.32Z" />
              <path d="M19.58,2.78a4.22,4.22,0,0,1,1.92.38l0,1.4h-.38A1.52,1.52,0,0,0,19.62,3.3c-.66,0-1.06.3-1.06.75s.34.67,1,.87l.51.14c1.17.33,1.77.91,1.77,1.89,0,1.21-1.13,2-2.75,2a4.7,4.7,0,0,1-2.22-.5l-.06-1.52h.38a1.86,1.86,0,0,0,1.85,1.49c.72,0,1.13-.33,1.13-.8s-.29-.7-1-.9l-.51-.15c-1.11-.31-1.81-.86-1.81-1.83C16.88,3.53,17.89,2.78,19.58,2.78Z" />
              <path d="M29.61,2.51h-.37C29,1.17,28.54.87,27.08.79h-.23V7.53c0,.57.14.75.92.86v.39h-3.9V8.39c.78-.11.91-.29.91-.86V.78h-.23c-1.46.08-1.89.38-2.15,1.72H22L22.1.32h7.44Z" />
              <path d="M32.31,2.78A2.41,2.41,0,0,1,35,5.3a2.45,2.45,0,0,1,0,.44H31.21A2.25,2.25,0,0,0,33.45,8a2,2,0,0,0,1.38-.5v.39a3,3,0,0,1-2.44,1,3,3,0,0,1-3.16-3A2.93,2.93,0,0,1,32.31,2.78ZM31.18,5.29l2.07,0c0-.08,0-.18,0-.31,0-1-.31-1.66-.95-1.66S31.18,4,31.18,5.23Z" />
              <path d="M35.81,5.87A3,3,0,0,1,39,2.78c1.44,0,2.23.69,2.23,1.54a.86.86,0,0,1-.87.89.85.85,0,0,1-.87-.85.82.82,0,0,1,.68-.83,1.51,1.51,0,0,0-.73-.17c-1,0-1.69.83-1.69,2.15A2.2,2.2,0,0,0,39.93,8a2.07,2.07,0,0,0,1.38-.48v.4a3.19,3.19,0,0,1-5.5-2Z" />
              <path d="M44.57,3.88a2.15,2.15,0,0,1,2-1.1,1.8,1.8,0,0,1,2,1.9V7.77c0,.41.1.53.71.62v.39H46.1V8.39c.52-.09.61-.19.61-.59V4.85c0-.78-.4-1.18-1.08-1.18a1.17,1.17,0,0,0-1.05.53V7.8c0,.4.09.5.62.59v.39H41.94V8.39c.61-.09.72-.21.72-.62V1.35c0-.37-.06-.45-.38-.56l-.34-.1V.32L44.58,0Z" />
              <path d="M52.51,3.89a2.14,2.14,0,0,1,2-1.11,1.8,1.8,0,0,1,2,1.9V7.77c0,.41.1.53.71.62v.39H54V8.39c.52-.09.6-.19.6-.59V4.85c0-.78-.39-1.18-1.07-1.18a1.17,1.17,0,0,0-1,.53V7.8c0,.4.09.5.62.59v.39H49.88V8.39c.61-.09.72-.21.72-.62V4.17c0-.37-.06-.46-.39-.56l-.33-.1V3.14l2.63-.32Z" />
              <path d="M60.46,7.77c0,.41.11.53.72.62v.39H57.82V8.39c.61-.09.72-.21.72-.62V4.17c0-.37-.06-.46-.39-.56l-.33-.1V3.14l2.64-.32ZM58.38,1.05a1,1,0,1,1,1,1A1,1,0,0,1,58.38,1.05Z" />
              <path d="M61.87,5.87a3,3,0,0,1,3.22-3.09c1.45,0,2.24.69,2.24,1.54a.86.86,0,0,1-.87.89.85.85,0,0,1-.87-.85.82.82,0,0,1,.68-.83,1.54,1.54,0,0,0-.73-.17c-1,0-1.69.83-1.69,2.15A2.2,2.2,0,0,0,66,8a2.07,2.07,0,0,0,1.38-.48v.4a3.19,3.19,0,0,1-5.5-2Z" />
              <path d="M68.11,7.46c0-.9.67-1.51,2.44-1.88l1.24-.27V4.8c0-1-.52-1.45-1.4-1.45a2.28,2.28,0,0,0-.8.14.81.81,0,0,1,.48.75.87.87,0,0,1-1.73,0c0-.82,1-1.47,2.69-1.47s2.65.62,2.65,2V7.54c0,.48.25.69.58.69a.8.8,0,0,0,.24,0v.37a2.1,2.1,0,0,1-1.2.32,1.37,1.37,0,0,1-1.46-1,2.13,2.13,0,0,1-2,1A1.53,1.53,0,0,1,68.11,7.46Zm2.77.63a1,1,0,0,0,.91-.48V5.77l-.45.1c-1,.22-1.34.62-1.34,1.27A.85.85,0,0,0,70.88,8.09Z" />
            </g>
          </g>
        </svg>
      </div>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      {children}
    </div>
  );
}
