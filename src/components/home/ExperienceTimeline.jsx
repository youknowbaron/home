import React from 'react';
import { Jumbotron } from './migration';
import {
    Container,
    Row,
} from "react-bootstrap";
import { Chrono } from 'react-chrono';


const ExperienceTimeline = ({ heading, items }) => {
    return (
        <section className="section">
            <Container>
                <Jumbotron id="experiences" className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {heading}
                    </h2>

                    <Chrono
                        items={items}
                        theme={{
                            primary: 'black',
                            secondary: 'gray',
                            titleColor: 'black',
                            cardTitleColor: 'black',
                            cardSubtitleColor: 'dimgray',
                        }}
                        fontSizes={{
                            cardSubtitle: '1rem',
                            cardText: '1rem',
                            cardTitle: '1.2rem',
                            title: '1.1rem',
                        }}
                        cardHeight={10}
                        contentDetailsHeight={0}
                        // mode="VERTICAL_ALTERNATING"
                        mode="VERTICAL"
                        disableToolbar={true}
                        disableInteraction={true}
                        // highlightCardsOnHover={true}
                        scrollable={false}
                        textDensity="HIGH"
                        useReadMore={false}
                    />

                </Jumbotron>
            </Container>
        </section>
    )
}

export default ExperienceTimeline;