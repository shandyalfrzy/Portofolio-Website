import { useRef, useState } from 'react';
import profileImg from '../../assets/profile.png';
import './TiltCard.css';

export default function TiltCard() {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse offset relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Max rotation angles
    const rotateX = -mouseY * 18;
    const rotateY = mouseX * 18;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04)`
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('');
  };

  return (
    <div className="tilt-card-container">
      <div
        ref={cardRef}
        className={`tilt-card ${isHovered ? 'tilt-card--hovered' : ''}`}
        style={isHovered ? { transform: transformStyle } : undefined}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="tilt-card-image-wrapper">
          <img
            src={profileImg}
            alt="Shandy Alfrizy"
            className="tilt-card-image"
          />
          <span className="tilt-card-tag">That's me ✦</span>
        </div>

        <div className="tilt-card-caption">
          <span className="tilt-card-name">SHANDY ALFRIZY</span>
          <span className="tilt-card-role">UI/UX Designer &amp; Web Developer</span>
        </div>
      </div>
    </div>
  );
}
