import Button from "@/components/button";
import Container from "@/components/container";
import MotionComponent from "@/components/motion";

const Table = ({ id }: { id: string }) => {
  const data = [
    { id: 1, name: "Editors", basic: "unlimited", semi: "limited", advanced: "unlimited", enterprise: "unlimited" },
    { id: 2, name: "Viewers", basic: "unlimited", semi: "5", advanced: "unlimited", enterprise: "9" },
    { id: 3, name: "Blocks", basic: "3", semi: "limited", advanced: "9", enterprise: "unlimited" },
  ];

  return (
    <Container className="pb-40">
      <MotionComponent
        tag="div"
        duration={1}
        delay={0.6}
        initialO={0}
        initialX={0}
        animateO={1}
        animateX={0}
        className="overflow-x-auto table-scrollbar"
      >
        <table className="min-w-full overflow-hidden rounded-2xl bg-light">
          <thead>
            <tr>
              <th className="px-4 py-2 whitespace-nowrap">
                <h5 className="text-xl md:text-2xl text-gradient">Compare our plans</h5>
              </th>
              <th className="px-4 py-8 whitespace-nowrap">
                <div className="flex flex-col items-center gap-4 text-gradient">
                  Basic
                  <Button className="rounded-2xl text-orange bg-light hover:text-light hover:bg-orange">Contact Us</Button>
                </div>
              </th>
              <th className="px-4 py-8 whitespace-nowrap">
                <div className="flex flex-col items-center gap-4 text-gradient">
                  Semi
                  <Button className="rounded-2xl text-orange bg-light hover:text-light hover:bg-orange">Contact Us</Button>
                </div>
              </th>
              <th className="px-4 py-8 whitespace-nowrap">
                <div className="flex flex-col items-center gap-4 text-gradient">
                  Advanced
                  <Button className="rounded-2xl text-orange bg-light hover:text-light hover:bg-orange">Contact Us</Button>
                </div>
              </th>
              <th className="px-4 py-8 whitespace-nowrap bg-blue">
                <div className="flex flex-col items-center gap-4">
                  Enterprise
                  <Button className="rounded-2xl text-blue bg-light hover:text-light hover:bg-blue">Contact Us</Button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            <tr>
              <td className="px-4 py-2 text-light bg-gradient-to-b from-yellow to-orange" colSpan={5}>
                Access
              </td>
            </tr>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="p-4 text-gray-500">{item.name}</td>
                <td className="p-4 text-center text-gray-500">{item.basic}</td>
                <td className="p-4 text-center text-gray-500">{item.semi}</td>
                <td className="p-4 text-center text-gray-500">{item.advanced}</td>
                <td className="p-4 text-center text-light bg-blue">{item.enterprise}</td>
              </tr>
            ))}
            <tr>
              <td className="px-4 py-2 text-light bg-gradient-to-b from-yellow to-orange" colSpan={5}>
                Fundamentals
              </td>
            </tr>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="p-4 text-gray-500">{item.name}</td>
                <td className="p-4 text-center text-gray-500">{item.basic}</td>
                <td className="p-4 text-center text-gray-500">{item.semi}</td>
                <td className="p-4 text-center text-gray-500">{item.advanced}</td>
                <td className="p-4 text-center text-light bg-blue">{item.enterprise}</td>
              </tr>
            ))}
            {data.map((item) => (
              <tr key={item.id}>
                <td className="p-4 text-gray-500">{item.name}</td>
                <td className="p-4 text-center text-gray-500">{item.basic}</td>
                <td className="p-4 text-center text-gray-500">{item.semi}</td>
                <td className="p-4 text-center text-gray-500">{item.advanced}</td>
                <td className="p-4 text-center text-light bg-blue">{item.enterprise}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </MotionComponent>
    </Container>
  );
};

export default Table;
