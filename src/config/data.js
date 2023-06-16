import { LuSwitchCamera, LuUsers } from "react-icons/lu";
import { BsTags } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

const data = [
    {
        id: 1,
        title: "Total Revenues",
        static: "$2,129,430",
        icon: <LuSwitchCamera />,
        color: "#DDEFE0",
    },
    {
        id: 2,
        title: "Total Transactions",
        static: "1,520",
        icon: <BsTags />,
        color: "#F4ECDD",
    },
    {
        id: 3,
        title: "Total Likes",
        static: "9,721",
        icon: <AiOutlineLike />,
        color: "#EFDADA",
    },
    {
        id: 4,
        title: "Total Users",
        static: "892",
        icon: <LuUsers />,
        color: "#DDEFE0",
    },
];


export default data;