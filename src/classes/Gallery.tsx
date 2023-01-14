import React, { Component } from 'react';
//import ReactPlayer from 'react-player';
//import Carousel, { Props } from '../src/components/Carousel';
import { Carousel } from 'react-responsive-carousel';

export const withExternalControls = () => {
    class ExternalControlledCarousel extends Component<{}, { currentSlide: number; autoPlay: boolean }> {
        constructor(props) {
            super(props);

            this.state = {
                currentSlide: 0,
                autoPlay: true,
            };
        }

        next = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide + 1,
            }));
        };

        prev = () => {
            this.setState((state) => ({
                currentSlide: state.currentSlide - 1,
            }));
        };

        changeAutoPlay = () => {
            this.setState((state) => ({
                autoPlay: !state.autoPlay,
            }));
        };

        updateCurrentSlide = (index) => {
            const { currentSlide } = this.state;

            if (currentSlide !== index) {
                this.setState({
                    currentSlide: index,
                });
            }
        };

        render() {
            const buttonStyle = { fontSize: 20, padding: '5px 20px', margin: '5px 0px' };
            const containerStyle = { margin: '5px 0 20px' };
            return (
                <div>
                    <div style={containerStyle}>
                        <p style={containerStyle}>
                            Use the buttons below to change the selected item in the carousel
                            <br />
                            <small>
                                <i>
                                    Note that the external controls might not respect the carousel boundaries but the
                                    carousel won't go past it.
                                </i>
                            </small>
                        </p>
                        <p>External slide value: {this.state.currentSlide}</p>
                        <button onClick={this.prev} style={buttonStyle}>
                            Prev
                        </button>
                        <button onClick={this.next} style={buttonStyle}>
                            Next
                        </button>
                        <button onClick={this.changeAutoPlay} style={buttonStyle}>
                            Toggle Autoplay ({this.state.autoPlay ? 'true' : 'false'})
                        </button>
                    </div>
                    <Carousel
                        autoPlay={this.state.autoPlay}
                        selectedItem={this.state.currentSlide}
                        onChange={this.updateCurrentSlide}
                        {...this.props}
                    >
                        {baseChildren.props.children}
                    </Carousel>
                </div>
            );
        }
    }

    return <ExternalControlledCarousel />;
};

