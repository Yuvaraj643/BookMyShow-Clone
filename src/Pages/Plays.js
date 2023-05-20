import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Poster from "../components/Poster/Poster";
import PlaysFilter from "../components/PlaysFilter/PlaysFilter";
const Plays = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-8/12">
          <h2 className="text-2xl font-bold mb-4">Plays in Bhubaneswar</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 my-3 lg:1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMCBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359140-xrbllhztdd-portrait.jpg"
                title="OMGoddess!"
                subtitle="Rangbhoomi Spaces: Hyderabad"
                Language="English/Hindi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMCBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359140-xrbllhztdd-portrait.jpg"
                title="OMGoddess!"
                subtitle="Rangbhoomi Spaces: Hyderabad"
                Language="English/Hindi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMCBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359140-xrbllhztdd-portrait.jpg"
                title="OMGoddess!"
                subtitle="Rangbhoomi Spaces: Hyderabad"
                Language="English/Hindi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMCBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359140-xrbllhztdd-portrait.jpg"
                title="OMGoddess!"
                subtitle="Rangbhoomi Spaces: Hyderabad"
                Language="English/Hindi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMCBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359140-xrbllhztdd-portrait.jpg"
                title="OMGoddess!"
                subtitle="Rangbhoomi Spaces: Hyderabad"
                Language="English/Hindi"
              />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:1/4">
              <Poster
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMCBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359140-xrbllhztdd-portrait.jpg"
                title="OMGoddess!"
                subtitle="Rangbhoomi Spaces: Hyderabad"
                Language="English/Hindi"
                className="rounded-lg"
              />
            </div>
          </div>
          </div>
          <div className="lg:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlaysFilter title="Date" tags={["Today", "Tomorrow","This Weekend"]} />
              <PlaysFilter title="Language" tags={["Tamil","Kannada"]} />
              <PlaysFilter title="Categories" tags={["Theatre"]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
