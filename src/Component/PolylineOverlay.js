import React from 'react'
import { CanvasOverlay } from 'react-map-gl'
// https://github.com/uber/react-map-gl/issues/591

export default function PolylineOverlay({
  points,
  color = 'red',
  lineWidth = 2,
  renderWhileDragging = true
}) {
  const _redraw = ({ width, height, ctx, isDragging, project, unproject }) => {
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';

    if ((renderWhileDragging || !isDragging) && points) {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;
      ctx.beginPath();
      points.forEach(point => {
        const pixel = project([point[0], point[1]]);
        ctx.lineTo(pixel[0], pixel[1]);
      });
      ctx.stroke();
    }
  };

  return <CanvasOverlay redraw={_redraw} />;
}
