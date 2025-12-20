import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  Slide,
  Box,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface EmailPopupProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (name: string, email: string) => void;
}

export default function EmailPopup({
  open,
  onClose,
  onSubmit,
}: EmailPopupProps) {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = () => {
    if (!email && !name) return alert("Please enter a valid name and email.");
    onSubmit(name,email);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 5,
          overflow: "hidden",
          p: 0,
          position: "relative",
          background: `
            radial-gradient(circle at top left, #fff8f2 0%, #fbe8d6 45%, #f3dec1 100%)
          `,
          boxShadow: "0 18px 60px rgba(180,120,60,0.25)",
        },
      }}
    >
      {/* Floating teas */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          width: 60,
          height: 60,
          backgroundImage: 'url("/tea-cup1.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 20,
          right: 15,
          width: 50,
          height: 50,
          backgroundImage: 'url("/tea-leaf.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.7,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: 20,
          width: 40,
          height: 40,
          backgroundImage: 'url("/tea-cup2.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.6,
        }}
      />

      {/* Header */}
      <Box sx={{ textAlign: "center", pt: 5, pb: 1, position: "relative" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            letterSpacing: "0.5px",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.8rem",
            background: `
              linear-gradient(90deg, #c7854a, #e7b87b, #f8e1c2)
            `,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Kachai ko deals and updates
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 1.5,
            maxWidth: 320,
            mx: "auto",
            color: "#5e4735",
            lineHeight: 1.6,
            opacity: 0.9,
            fontSize: "0.95rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Explore enchanted teas, cozy rituals, and seasonal stories.  
          Sign up and let each cup bring warmth, flavor, and a touch of magic.
        </Typography>
      </Box>

      {/* Email input */}
      <DialogContent sx={{ px: 4, pt: 3 }}>
        <TextField
          fullWidth
          label="Your First Name"
          type="name"
          variant="outlined"
          InputLabelProps={{
            sx: { color: "rgba(120,90,60,0.6)", fontSize: "0.9rem" },
          }}
          InputProps={{
            sx: {
              background: "rgba(255,255,255,0.7)",
              borderRadius: 2,
              "& fieldset": { borderColor: "rgba(150,110,70,0.25)" },
              "&:hover fieldset": { borderColor: "rgba(150,110,70,0.45)" },
            },
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Your Email"
          type="email"
          variant="outlined"
          InputLabelProps={{
            sx: { color: "rgba(120,90,60,0.6)", fontSize: "0.9rem" },
          }}
          InputProps={{
            sx: {
              background: "rgba(255,255,255,0.7)",
              borderRadius: 2,
              "& fieldset": { borderColor: "rgba(150,110,70,0.25)" },
              "&:hover fieldset": { borderColor: "rgba(150,110,70,0.45)" },
            },
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>

      {/* Buttons */}
      <DialogActions sx={{ px: 4, pb: 4, pt: 1 }}>
        <Button
          onClick={onClose}
          sx={{
            textTransform: "none",
            color: "rgba(90,70,50,0.65)",
            "&:hover": { background: "rgba(200,170,140,0.15)" },
          }}
        >
          Not now
        </Button>

        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 3,
            fontWeight: 600,
            background: `linear-gradient(90deg, #d49a64, #e9c598, #fae9cd)`,
            color: "#4b3727",
            boxShadow: "0 4px 12px rgba(180,120,80,0.25)",
            "&:hover": {
              background: `linear-gradient(90deg, #c78855, #ddb07f, #f2d9b9)`,
            },
          }}
        >
          Enter the Circle ✨
        </Button>
      </DialogActions>
    </Dialog>
  );
}
