import { useState } from "react";
import thumb from "../../assets/NewChanges/thumb.jpg";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const Video = () => {
    const [muted, setMuted] = useState(false);

    return (
        <div className="relative w-full h-full min-h-[400px] aspect-video rounded-xl overflow-hidden shadow-lg">
            <img 
                src={thumb} 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover object-center" 
            />

            <IconButton
                sx={{
                    width: { xs: 48, sm: 56, md: 64 },
                    height: { xs: 48, sm: 56, md: 64 },
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    position: "absolute",
                    inset: 0,
                    margin: "auto",
                    "&:hover": { transform: "scale(1.1)" },
                }}
            >
                <PlayArrowIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36 }, color: "#000" }} />
            </IconButton>
            <IconButton
                sx={{
                    width: { xs: 40, sm: 48, md: 56 },
                    height: { xs: 40, sm: 48, md: 56 },
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: { xs: 8, sm: 12 },
                    right: { xs: 8, sm: 12 },
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
            >
                <FullscreenIcon sx={{ fontSize: { xs: 22, sm: 26, md: 30 }, color: "#000" }} />
            </IconButton>
            <IconButton
                sx={{
                    width: { xs: 40, sm: 48, md: 56 },
                    height: { xs: 40, sm: 48, md: 56 },
                    backgroundColor: "#fff",
                    position: "absolute",
                    bottom: { xs: 8, sm: 12 },
                    right: { xs: 8, sm: 12 },
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
                onClick={() => setMuted(!muted)}
            >
                {muted ? (
                    <VolumeOffIcon sx={{ fontSize: { xs: 22, sm: 26, md: 30 }, color: "#16A34A" }} />
                ) : (
                    <VolumeUpIcon sx={{ fontSize: { xs: 22, sm: 26, md: 30 }, color: "#16A34A" }} />
                )}
            </IconButton>
        </div>
    );
};

export default Video;