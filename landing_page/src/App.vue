<template>
  <div class="container">
    <nav class="navbar">
      <div class="logo">
        <!-- <img src="/assets/logo.png" alt="Logo" /> -->
        <span class="company-name">Kapybara.ai</span>
      </div>
        <button class="start-button-nav">Open Kapybara.ai</button>
    </nav>

    <div class="hero">
      <h1 class="tagline">Stupid easy chatbots + chat insights. <span class="blink">|</span></h1>
      <p class="description">
        > Built for students, fandoms, and businesses.
        <br> > The first chat-driven data insight platform for community and dev relations.
        <br> > Available on Discord, Web, Slack, and more.
      </p>
      <div class="video-container">
        <video controls>
            <source src="/src/assets/hero-video.mp4" type="video/mp4">
        </video>
      </div>
      <div class="buttons-hero">
        <button class="start-button-hero">Get started for free</button>
        <button class="open-button-hero">Open Kapybara.ai</button>
      </div>
    </div>

    <div class="features">
      <div class="feature feature1">
        <img src="/assets/feature1.png" alt="Upload knowledge base" />
        <h2>Custom Knowledge Base</h2>
        <p>Just paste a URL or upload a file. We support website links, Youtube videos, and more.</p>
      </div>
      <div class="feature feature2">
        <img src="/assets/feature2.png" alt="Feature 2" />
        <h2>Deploy in Chat</h2>
        <p>Add your bot to Discord in under a minute!</p>
      </div>
      <div class="feature feature3">
        <img src="/assets/feature3.png" alt="Feature 3" />
        <h2>Insights Dashboard</h2>
        <p>View analytics from your chatbot deployments to inform future community and DevRel projects.</p>
      </div>
    </div>

    <div class="bottom">
      <h1 class="bottom-text">Power up your community.</h1>
      <button class="start-button-bottom">Start for Free</button>
    </div>

  </div>
  
</template>

<style>

/* d5641c orange */

:root {
  --primary-color: #fffcf5; /* Define the color variable in the :root pseudo-class */
  --main-text-color: #ff8000;
}

body {
  background-color: var(--primary-color) /*#0064d2; Set the desired background color */
}

@font-face {
  font-family: "Uni Sans Heavy";
  src: url("src/assets/fonts/Uni Sans/Uni Sans Thin.otf") format("opentype");
}

@font-face {
  font-family: "gg Sans";
  src: url("src/assets/fonts/gg Sans/gg sans Regular.woff") format("woff");
}

.blink {
  animation: blinker 1s step-start infinite;
}

@keyframes blinker {  
  50% { opacity: 0; }
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--main-text-color);/*#0064d2; */
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 30px;
  margin-right: 10px;
}

.video-container {
  flex-basis: 50%;
}

.buttons-hero {
  order:2;
}

/* .hero {
  width: 100%;
  display: flex;
} */

/* .buttons-hero {
  grid-column: 1;
  align-items: left;
} */

 .video-container video {
  /* order: 1; */
  flex: 1;
  float: right;
  /* margin-left: 2vw; */
  width: 50vw;
  height: auto;
}

.company-name {
  margin-left: 60px;
  font-family: "Uni Sans Heavy";
  font-weight: bold;
  font-size: 18px;
  color: white;
}

.start-button-nav {
  font-family: "gg Sans";
  margin-right: 60px;
  white-space: nowrap;
  border-radius: 60px;
  background-color: white;
  color: #1f1f1f;
  border-color: white;
  border-width: thin;
}

.start-button-nav:hover {
  font-family: "gg Sans";
  margin-right: 60px;
  white-space: nowrap;
  border-radius: 60px;
  background-color: #1f1f1f;
  color: white;
  border-color: #1f1f1f;
  border-width: thin;
}

/* .buttons-hero{
  display: flex;
  align-items:flex-start;
  /* white-space: nowrap; */
  /*font-family: "gg Sans";
  /* margin: -40px; */
  /*font-size: 30px;
  order:1
  /* margin-left: 60px; */
/*} */

.start-button-hero {
  float: left;
  height: 60px;
  font-size: 20px;
  border-radius: 60px;
  background-color: var(--main-text-color);
  color: white
}

.open-button-hero {
  float: left;
  height: 60px;
  font-size: 20px;
  border-radius: 60px;
  background-color: transparent;
  border-color: #1f1f1f;
  border-width: thin;
  color: #1f1f1f;
}

.open-button-hero:hover {
  float: left;
  height: 60px;
  font-size: 20px;
  margin-left: 20px;
  border-radius: 60px;
  background-color: #1f1f1f;
  border-color: #1f1f1f;
  color: white;
}

.hero {
  margin-top: 5vh;
  margin-bottom: 8vh;
  display: flex;
  /* align-items: center; */
  background-color: var(--primary-color);/* #0064d2;*/
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  /* padding-right: 20px; */
}

.hero .tagline {
  /* margin-left: 60px; */
  font-size: 80px;
  font-family: "gg Sans";
  text-align: left;
  color: #1f1f1f; /* Set the desired text color for the hero tagline */
}

.hero .description {
  margin-left: 60px;
  font-size: 30px;
  font-family: "gg Sans";
  text-align: left;
  color: var(--main-text-color); /* Set the desired text color for the p description */
}

.tagline {
  font-size: 36px;
  margin-bottom: 10px;
}

.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-bottom: 10vh;
}

.bottom {
  margin-top: 3vh;
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bottom .bottom-text {
  font-family: "gg Sans";
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature {
  text-align: center;
  width: 100%;
}

.feature.feature1 {
  background-color: white; /* Set the desired background color for feature 1 */
}

.feature.feature2 {
  background-color: #f5f5f5; /* Set the desired background color for feature 2 */
}

.feature.feature3 {
  background-color: white; /* Set the desired background color for feature 3 */
}

.feature img {
  height: 100px;
  margin-bottom: 10px;
}

.feature h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
}

.feature p {
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
}

.start-button-bottom {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 60px;
  background-color: white;
  color: black;
  cursor: pointer;
}
</style>
