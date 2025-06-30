import { Box } from '@mui/material';
import React from 'react';

const products = [
    { label: "Doctor List", value: "doctor" },
    { label: "Patient List", value: "patient" },
    { label: "Payment List", value: "payment" },
    { label: "Campaign List", value: "campaign" },
    { label: "Analytics", value: "analytics" },
    { label: "Outreach", value: "outreach" },
    { label: "NoShowChart", value: "noShow" },
    { label: "Message", value: "outreach" },
    { label: "Review", value: "review" },
    { label: "Sign In", value: "signin" },
];

type SidebarMenuProps = {
    onSelect: (value: string) => void;
};
const SidebarMenu: React.FC<SidebarMenuProps> = ({ onSelect }) => {
    return (
        <div>
            <div className="mainMenuContainer">
                <div>
                    <Box>
                        {products.map((product, index) => (
                            <div key={index}
                                onClick={() => {
                                    console.log("Clicked:", product.value);  // ✅ This should now appear
                                    onSelect(product.value);
                                }}
                                className="useFulldiv" style={{ cursor: "pointer", padding: "10px" }}>
                                <span className="label-new-link">{product.label}</span>
                            </div>
                        ))}
                    </Box>
                </div>

            </div>
        </div>
    );
};

export default SidebarMenu;