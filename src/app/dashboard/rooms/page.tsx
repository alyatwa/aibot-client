import RoomsHeader from "@/components/rooms-page/header";
import RoomCard from "@/components/rooms-page/room-card";
import { SimpleGrid } from "@chakra-ui/react";

export async function generateMetadata({ params }: any) {
  return {
    title: "Rooms",
  };
}

const Rooms = () => {
  const rooms = [
    {
      name: "Kitchen",
      description: "This room is used for marketing purposes",
      status: "live",
      cover:
        "https://www.ikea.com/images/a-white-and-yellow-living-room-with-white-storage-units-and--48312c9b6c354f4a71b0ea40edb555e6.jpg?f=xxxl",
      type: "Kitchen",
      id: "1",
    },
    {
      name: "Bathroom",
      description: "This Room is used for marketing purposes",
      status: "draft",
      cover:
        "https://www.ikea.com/images/a-birch-effect-ersnaes-sideboard-against-a-white-wall-with-a-2c725c3e68eb2e0220df9ce6d3749fd6.jpg?f=xxxl",
      type: "marketing",
      id: "2",
    },
    {
      name: "Living room",
      description: "This Room is used for marketing purposes",
      status: "active",
      cover:
        "https://www.ikea.com/images/a-3-seat-sofa-a-flatwoven-rug-a-rattan-armchair-with-cushion-0ac620bb7c754ffa215575fc686e4142.jpg?f=xxxl",
      type: "marketing",
      id: "3",
    },
  ];
  return (
    <>
      <RoomsHeader />
      <SimpleGrid minChildWidth="300px" spacing="40px" justifyItems={"center"}>
        {rooms.map((room) => (
          <RoomCard room={room} onClick={() => {}} key={room.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Rooms;
