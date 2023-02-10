import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";


const About = () => {
  return (
    <Layout>
        <Box
          sx={{
            my: 15,
            textAlign: "center",
            p: 2,

            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
              my: 5,
              fontSize: "20px",

            },
            "@media (max-width:600px)": {
              mt: 0,
              "& h4 ": {
                fontSize: "1.5rem",
              },
            },
          }}
        >
          <Typography variant="h4">Welcome To Burro</Typography>

          <p>
            Situated in the idyllic village of Riccall, we’re a contemporary
            Italian restaurant offering both classic Italian food and dishes with
            a twist. Open and serving food all day from noon ‘til late (7 days per
            week), we offer diners an authentic Italian menu, inspired by both
            traditional and modern dishes, perfectly complimented by a full wine
            and cocktail menu, desserts and more. Our venue is situated in the Old
            Riccall Mill, a truly unique building full of rustic character and
            atmosphere. Using natural light and glass to blend a contemporary and
            classic theme, our exciting new destination is just waiting for you to
            visit!
          </p>
        </Box>
  
      
    </Layout>
  );
};

export default About;
