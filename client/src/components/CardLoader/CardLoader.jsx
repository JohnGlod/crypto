import React from "react"
import ContentLoader from "react-content-loader"

export const CardLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={235}
    height={320}
    viewBox="0 0 235 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="260" rx="8" ry="8" width="140" height="15" /> 
    <rect x="0" y="239" rx="8" ry="8" width="210" height="15" /> 
    <rect x="0" y="0" rx="8" ry="8" width="210" height="230" /> 
    <rect x="153" y="260" rx="8" ry="8" width="54" height="15" />
  </ContentLoader>
)
