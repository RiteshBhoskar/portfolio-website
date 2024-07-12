import React from "react";
import { LuGraduationCap } from "react-icons/lu";
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import MiniSectionDivider from "./MiniSectionDivider";
import { LoaderPinwheel } from "lucide-react";

export default function Experience() {
  return (
    <div id="experience" className="flex py-5 justify-center items-center">
      <div>
        <h2
          className="text-5xl pb-7 font-lato text-white
         justify-center flex"
        >
          My Experience
        </h2>
        <div className="flex justify-center items-center">
          <div className="text-4xl text-center text-white pr-2 ml-6 flex items-center">
            <LuGraduationCap />
          </div>
          <p className="text-2xl text-white font-lato flex justify-center">
            Currently Studying in College , Looking for an Intership.
          </p>
        </div>
        <div className="flex justify-center">
          <MiniSectionDivider />
        </div>
        <div className="flex justify-center text-white">
          <LoaderPinwheel />
        </div>
      </div>
    </div>
  );
}

// <VerticalTimeline lineColor=''>
//         {
//           experiencesData.map((item, index)=> (
//             <React.Fragment key={index}>
//               <VerticalTimelineElement
//               contentStyle={{
//                 background:"#f3f4f6",
//                  boxShadow:"none",
//                  border: "1px solid rgba(0,0,0,0.05)",
//                  textAlign: "left",
//                  padding: "1.3rem 2rem",
//               }}
//               contentArrowStyle={{
//                 borderRight: "0.4rem solid #9ca3af",
//               }}
//               date={item.date}
//               icon={item.icon}
//               iconStyle={{
//                 background: 'white',
//                 fontSize: '1.5rem'
//               }}>
//                 <h3 className='font-semibold capitalize'>
//                   {item.title}
//                 </h3>
//                 <p className='font-normal !mt-0'>
//                   {item.location}
//                 </p>
//                 <p className='!mt-1 !font-normal text-gray-700'>
//                   {item.description}
//                 </p>
//               </VerticalTimelineElement>
//             </React.Fragment>
//           ))
//         }
//       </VerticalTimeline>
