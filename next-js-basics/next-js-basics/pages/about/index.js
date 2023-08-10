function AboutPage(props) {
  console.log('%c-> developmentConsole: AboutPage===> ', 'color:#77dcfd');
  const { info } = props;
  console.log('%c-> developmentConsole: info= ', 'color:#77dcfd', info);

  return (
    <div>
      <h1>Hello, the AboutPage</h1>
      <p>info: {info}</p>
    </div>
  );
}

export default AboutPage;

export async function getStaticProps() {
  console.log('%c-> developmentConsole: getStaticProps===> ', 'color:#77dcfd');
  let count = 0;
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function sleep() {
    await timeout(10000);
    return count++;
  }

  await sleep();

  console.log('%c-> developmentConsole: count=OUTSIDE ', 'color:#77dcfd', count);

  return {
    props: {
      info: count,
    },
    revalidate: 10,
  };
}
