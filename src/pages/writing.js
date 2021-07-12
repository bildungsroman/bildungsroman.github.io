import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Intro } from '../components/styled/repository';
import SectionIntro from '../components/sectionIntro';
import { ContainerLayout, ListSection } from '../components/common';

const WritingPage = () => { 
  return (
    <>
      <Layout> 
        <Seo title='Writing' />
        <ContainerLayout>
          <SectionIntro title='Writing' subtitle='On my former life as a writer' />
          <Intro>I am the co-author and editor of the book <em><a href="http://www.amazon.com/Essential-Guide-Being-Polish/dp/0985062304/" target="_blank" rel="noreferrer">The Essential Guide to Being Polish</a></em>, released July 2013. I also wrote and was the project manager for a workbook for startups titled <em>PowerGuide</em> for <a href="http://www.innoenergy.com/" alt="InnoEnergy" target="_blank" rel="noreferrer">InnoEnergy</a>. You can read an excerpt from it <a href="https://www.dropbox.com/s/visk75r1porctov/PowerGuide%20excerpt.pdf?dl=0" target="_blank" rel="noreferrer">here</a>.</Intro>
          <Intro>I have experience as both a freelance writer and tech journalist and as an editor, with over four years of combined experience as the editor-in-chief of a newspaper and online publication. My areas of expertise include tech and startups (particularly cleantech), history, politics, European culture, and literature in emigration, though I am an obsessive reader of physics, astronomy and neuroscience books and love to write on those topics as well.</Intro>
          <Intro>In addition to writing, I am also a freelance translator, and started my own location-independent translation business in January 2011 called <a href="http://tlumaczenia.bezbiura.com/" target="_blank" rel="noreferrer">Tłumaczenia Bez Biura</a> (Translations Without an Office). I specialize in Polish to English translation, as well as proofreading or copyediting already translated English text.</Intro>
          <h2>Reviews of <em>The Essential Guide to Being Polish</em></h2>
          <Intro>"[A] carefully researched but reader-friendly peregrination through the story of Poland—a thrilling if sometimes depressing ride you wouldn't believe if you read it in a novel. . . . I can say honestly . . . that <em>The Essential Guide to Being Polish</em> will not disappoint."<em> — Krakow Post</em></Intro>
          <Intro>"Do you plan to visit Poland for the first time? Are you contemplating a return trip? Do you enjoy reading about other countries and their cultures? If you answered 'yes' to any of the above then you must read <em>The Essential Guide to Being Polish</em>. . . . Once you start reading, you’ll want to read it all." —  <em>Am-Pol Eagle</em></Intro>
          <Intro>"I invite you on this journey into the depths of the Polish soul." — from the foreword by former Polish President Lech Walesa</Intro>
          <Intro>“<em>The Essential Guide to Being Polish</em> recounts the political and cultural history of Poland—and, if you will, of Polishness—with a reader-friendly, streamlined clarity that is leavened with wit and timely, amusing turns, but that for all its playfulness never loses sight of the essential complexity of its subject.” —Stuart Dybek, award-winning author of <em>The Coast of Chicago</em> and <em>I Sailed with Magellan</em></Intro>
          <ListSection>
            <div>
              <h2>Selected Writing</h2>
              <Intro>
                <ul>
                  <li><a href="https://www.dropbox.com/s/visk75r1porctov/PowerGuide%20excerpt.pdf?dl=0" target="_blank" rel="noreferrer">Excerpt</a> from the second edition of the <em>PowerGuide</em> for InnoEnergy</li>
                  <li><a href="http://news.bitspiration.com/authors/anna-spysz/" target="_blank" rel="noreferrer">Published articles</a> on Bitspiration: Tech News from Poland</li>
                  <li><a href="https://medium.com/@annaspies" target="_blank" rel="noreferrer">My writing</a> on Medium</li>
                  <li><a href="http://blog.annaspysz.com/tagged/good_stuff" target="_blank" rel="noreferrer">The "best of" my blog, Saving Ink</a></li>
                  <li><a href="http://startupxplore.com/blog/polish-startup-scene-bitinspiration-interview/" target="_blank" rel="noreferrer">More than Good Vodka: The Polish Startup Scene</a> for Startup Xplore</li>
                  <li><a href="http://nerdfitness.com/blog/2012/01/23/kung-fu/" target="_blank" rel="noreferrer">Why Kung Fu is Perfect for Nerds</a> for <a href="http://nerdfitness.com">Nerd Fitness</a></li>
                  <li>Archive: <a href="http://blog.annaspysz.com/archive/" target="_blank" rel="noreferrer">Saving Ink, January 2009-present</a></li>
                  <li>Archive: <a href="http://www.krakowpost.com/article/author/annaspysz" target="_blank" rel="noreferrer">Articles written for the Krakow Post, 2007-2010</a></li>
                  <li>Archive: <a href="http://tedxkrakow.com/blog/?author=10" target="_blank" rel="noreferrer">Articles written for the TEDxKraków blog</a></li>
                </ul>
              </Intro>
            </div>
            <div>
              <h2>Selected Interviews</h2>
              <Intro>
                <ul>
                  <li>I was interviewed about the topic of women in tech and startups in Poland for the <a href="https://www.producthunt.com/podcasts/proceed-podcast-2-anna-spysz-former-editor-of-bitspiration-news" target="_blank" rel="noreferrer">ProCEEd Podcast</a>.</li>
                  <li>If you read Polish, here's an article on my role as editor in chief of the Krakow Post: <a href="http://krakow.gazeta.pl/krakow/1,35798,5650766.html" target="_blank" rel="noreferrer">Nowa krakowska gazeta dla obcokrajowców</a>.</li>
                  <li>Finally, very rarely and reluctantly I've done TV/web video interviews. Here's one of them: <a href="http://www.youtube.com/watch?v=GEPfhPHG3Jc" target="_blank" rel="noreferrer">INMA Poll: Anna Spysz, Editor in Chief, Krakow Post</a>.</li>
                </ul>
              </Intro>
            </div>
          </ListSection>
        </ContainerLayout>
      </Layout>
    </>
  )
}
export default WritingPage;
