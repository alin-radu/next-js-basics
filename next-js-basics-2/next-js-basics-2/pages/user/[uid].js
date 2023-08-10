function UserIdPage(props) {
  console.log('%c-> developmentConsole: props= ', 'color:#77dcfd', props);
  return <h1>id: {props.id}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
  console.log('%c-> developmentConsole: UserIdPage | Server Side Code ', 'color:#77dcfd');

  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: 'userId-' + userId,
    },
  };
}
