import React from 'react';
import "./styles.css"
import {
    MedicalServices,
    Science,
    EventAvailable,
    BuildCircle,
    CheckCircle
} from '@mui/icons-material';
import {  Box, } from '@mui/material';
import Tooltip, { tooltipClasses , TooltipProps } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import doctor from "../../assets/images/robert.jpg"


const Orbit = () => {
   const PurpleTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#6a1b9a',
    color: '#ffffff',
    fontSize: 12,
    borderRadius: 4,
    padding: '6px 8px',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#6a1b9a',
  },
}));

    return (
        <div className="orbit-wrapper">
            <div className="atom-nucleus">🦷</div>

            {/* Orbit 1 - Core Services */}
            <div className="atom-orbit orbit1">
                <PurpleTooltip title="Dental Cleaning">
                <div className="electron top">
                    <MedicalServices fontSize="inherit" />
                </div>
                </PurpleTooltip>
                <div className="electron bottom">
                    <Science fontSize="inherit" />
                </div>
            </div>

            {/* Orbit 2 - Procedures */}
            <div className="atom-orbit orbit2">
                 <PurpleTooltip title="Features"> 
                <div className="electron left">
                    <BuildCircle fontSize="inherit" />
                </div>
                </PurpleTooltip>
                 <PurpleTooltip title="Notifications">
                <div className="electron right">
                    <CheckCircle fontSize="inherit" />
                </div>
                </PurpleTooltip>
            </div>

            {/* Orbit 3 - Features */}
            <div className="atom-orbit orbit3">
                <PurpleTooltip title="Appointment">
                <div className="electron top">
                    <EventAvailable fontSize="inherit" />
                </div>
                </PurpleTooltip>
                <div className="electron bottom">
                    <PurpleTooltip title="Dr. Maria (Orthodontist)">
                    <Box
                        sx={{
                            width: 90,
                            height: 40,
                            bgcolor: '#fff',
                            boxShadow: 3,
                            p: 0.5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 1,
                            textAlign: 'center'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <img
                                src={doctor}
                                alt="doctor"
                                style={{ width: 26, height: 26, borderRadius: '50%' }}
                            />
                            <Box sx={{ fontSize: 12, color: '#fbc02d' }}>
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} sx={{ fontSize: 12 }} />
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ fontSize: 10, color: '#555', mt: 0.5 }}>50+ reviews</Box>
                    </Box>
                    </PurpleTooltip>
                </div>

            </div>
        </div>
    );
};

export default Orbit;