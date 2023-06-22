'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import Layout from '../../common/components/layout';

export default function About() {
  return (
    <Layout effect="fade">
      <div className="about">
        <p className="about__header"> About </p>
        <p className="about__title"> About DDT Real Estate</p>
        <p className="about__text">
          We gather for about 90-minutes as a group. During this time, we
          introduce ourselves, briefly discuss a verse or passage from the
          Bible, and participate in conversation topics like travel, gardening,
          pets, culture, food, or hobbies. We gather for about 90-minutes as a
          group. During this time, we introduce ourselves, briefly discuss a
          verse or passage from the Bible, and participate in conversation
          topics like travel, gardening, pets, culture, food, or hobbies. We
          gather for about 90-minutes as a group. During this time, we introduce
          ourselves, briefly discuss a verse or passage from the Bible, and
          participate in conversation topics like travel, gardening, pets,
          culture, food, or hobbies.
        </p>
        <p className="about__title"> Design And Development</p>
        <Image
          src={logo}
          className='about__logo'
          width={220}
          height={60}
          alt="Picture of the author"
        />
      </div>
    </Layout>
  );
}
