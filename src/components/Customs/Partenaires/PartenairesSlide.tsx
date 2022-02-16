import React from 'react'
import { Box } from '../../../layouts';
import Card from '../../Cards/Card';


export interface IPartenairesSlide {
    title?: string;
    imageUrl?: string;
    handleSwipeNext?: () => void;
}

const PartenairesSlide:React.FC<IPartenairesSlide> = ({title, imageUrl}) => {
  return (

    <Card style={{width: "100%"}} imageUrl={imageUrl} title=""/>
  )
}

export default PartenairesSlide;