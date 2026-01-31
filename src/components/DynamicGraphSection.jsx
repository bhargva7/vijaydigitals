import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DynamicGraphSection = () => {
  // Initial state for affordableCost and qualityOfWork
  const [affordableCost, setAffordableCost] = useState(0); // Start from 0
  const [qualityOfWork, setQualityOfWork] = useState(0); // Start from 0

  // Ref to the graph section to observe when it comes into view
  const graphRef = useRef(null);

  // Function to animate the progress bar values gradually
  const animateProgressBar = (targetValue, setValue) => {
    let currentValue = 0;
    const increment = targetValue / 100; // Small increment for each step

    const animate = () => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue; // Ensure it doesn't exceed the target
      }
      setValue(Math.round(currentValue)); // Update the state with the new value

      // Continue the animation until the target value is reached
      if (currentValue < targetValue) {
        requestAnimationFrame(animate); // Schedule the next frame
      }
    };

    // Start the animation
    requestAnimationFrame(animate);
  };

  // Function to simulate fetching or calculating dynamic values
  const updateGraphData = () => {
    animateProgressBar(90, setAffordableCost); // Animate to 90% for affordableCost
    animateProgressBar(99, setQualityOfWork); // Animate to 99% for qualityOfWork
  };

  useEffect(() => {
    // Store the current value of graphRef in a variable to avoid warning
    const graphElement = graphRef.current;

    // Create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the section is in view
        if (entries[0].isIntersecting) {
          // Trigger graph data update when section is visible
          updateGraphData();
          observer.disconnect(); // Stop observing once the animation has triggered
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    // Start observing the graph section
    if (graphElement) {
      observer.observe(graphElement);
    }

    // Cleanup observer when the component unmounts
    return () => {
      if (graphElement) {
        observer.disconnect();
      }
    };
  }, []); // Empty dependency array means the effect only runs on mount/unmount

  return (
    <div className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
      <div className="inner-column">
        <div className="image-box">
          <figure className="image overlay-anim wow fadeIn">
            <img src="images/resource/faq.jpg" alt="What We Do" />
          </figure>
        </div>
        <div className="graph-box" ref={graphRef}>
          {/* Affordable Cost Graph */}
          <div className="pie-graph wow fadeInUp">
            <div className="graph-outer">
              <CircularProgressbar
                value={affordableCost}
                text={`${affordableCost}%`}
                styles={{
                  path: {
                    stroke: '#ff3838',
                  },
                  trail: {
                    stroke: '#f9f9f9',
                  },
                  text: {
                    fill: '#ff3838',
                    fontSize: '24px',
                  },
                }}
                strokeWidth={3} // Decreased strokeWidth for thinner circle
                initialAnimation={true} // Enable animation for the initial render
                counterClockwise={false} // Optional: set clockwise progress
              />
            </div>
            <h6 className="title">
              Affordable <br />cost
            </h6>
          </div>

          {/* Quality of Work Graph */}
          <div className="pie-graph wow fadeInUp">
            <div className="graph-outer">
              <CircularProgressbar
                value={qualityOfWork}
                text={`${qualityOfWork}%`}
                styles={{
                  path: {
                    stroke: '#ff3838',
                  },
                  trail: {
                    stroke: '#f9f9f9',
                  },
                  text: {
                    fill: '#ff3838',
                    fontSize: '24px',
                  },
                }}
                strokeWidth={3} // Decreased strokeWidth for thinner circle
                initialAnimation={true} // Enable animation for the initial render
                counterClockwise={false} // Optional: set clockwise progress
              />
            </div>
            <h6 className="title">
              Quality <br />of work
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicGraphSection;
