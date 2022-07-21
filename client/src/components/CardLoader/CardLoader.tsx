import React from "react"
import ContentLoader from "react-content-loader"

export const CardLoader = () => (
  <ContentLoader 
    speed={2}
    width={230}
    height={310}
    viewBox="0 0 210 280"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="260" rx="8" ry="8" width="140" height="15" /> 
    <rect x="0" y="240" rx="8" ry="8" width="210" height="15" /> 
    <rect x="0" y="0" rx="8" ry="8" width="210" height="230" /> 
    <rect x="153" y="260" rx="8" ry="8" width="58" height="15" />
  </ContentLoader>
)
