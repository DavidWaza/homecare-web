import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabComponent = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="xl:w-full md:w-[400px] w-[400px]">
        <TabsList>
          <TabsTrigger value="passion" defaultChecked>
            The Passion
          </TabsTrigger>
          <TabsTrigger value="expertise">The Expertise</TabsTrigger>
          <TabsTrigger value="commit">The Commitment</TabsTrigger>
        </TabsList>
        <TabsContent value="passion">
          At Harmony, our passion for providing exceptional healthcare services
          to the elderly is at the heart of everything we do. We believe that
          every senior deserves to live a life of dignity, comfort, and joy. Our
          dedicated team is inspired by the stories and experiences of the older
          generation, and we are driven to make a positive impact on their
          lives. We understand the unique needs and challenges that come with
          aging, and our mission is to offer compassionate care that enhances
          the quality of life for our clients.
          <div className="py-10">
            <button className="py-3 px-10 text-white rounded-full bg-gradient-to-r from-[#32cd32] to-[#006400] !hover:bg-[#F2F8E3]">
              See about us
            </button>
          </div>
        </TabsContent>
        <TabsContent value="expertise">
          Commitment to excellence is our promise to you. We are unwavering in
          our dedication to providing the highest standard of care and support.
          Our commitment extends beyond just meeting the basic needs of our
          clients; we strive to exceed expectations by offering personalized,
          holistic care plans that address the physical, emotional, and social
          aspects of well-being. We are here for you and your loved ones, 24/7,
          ensuring that you receive the attention and care you deserve. Our
          commitment is reflected in our continuous efforts to improve our
          services and stay updated with the latest advancements in elderly
          care.
          <div className="py-10">
            <button className="py-3 px-10 text-white rounded-full bg-gradient-to-r from-[#32cd32] to-[#006400] !hover:bg-[#F2F8E3]">
              See about us
            </button>
          </div>
        </TabsContent>
        <TabsContent value="commit">
          With years of experience in the healthcare industry, our team of
          professionals brings a wealth of knowledge and expertise to the table.
          Our staff includes licensed nurses, experienced caregivers, and
          healthcare specialists who are trained to handle a wide range of
          medical conditions and needs. We employ evidence-based practices and
          state-of-the-art technology to deliver effective and efficient care.
          Our expertise is not just limited to medical care; we also offer
          support in daily living activities, companionship, and recreational
          activities to promote a holistic approach to health and happiness.
          <div className="py-10">
            <button className="py-3 px-10 text-white rounded-full bg-gradient-to-r to-[#32cd32] from-[#006400] !hover:bg-[#F2F8E3]">
              See about us
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabComponent;
