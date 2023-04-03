import { useRef } from "react";
import { AboutMeSection } from "./style";
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { ContactSectionText } from "../Contacts/style";

export const AboutMe = () => {
    const ref = useRef(null)

    return (
        <AboutMeSection id="about-me">
            <Container>
                <Text type="heading2" color="grey4">
                    About {" "}
                    <Text as="span" type="heading2" color="brand1">
                        Me
                    </Text>
                </Text>
                <Text type="heading3" color="grey4">
                    <Text as="span" type="heading3" color="brand1">
                        Full-Stack Web {" "}
                    </Text>
                    Developer in training, passionate about the area with little experience but with
                    the desire and ambition to evolve. I have experience with small web projects in React.
                    API building with NodeJS and Express/Python and Django with PostrgreSQL hosted on
                    AWS and notions of Flask, MongoDB, Redis.
                </Text>
            </Container>
        </AboutMeSection>
    )
}