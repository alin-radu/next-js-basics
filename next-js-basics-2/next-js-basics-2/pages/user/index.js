function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  console.log(
    '%c-> developmentConsole: UserProfilePage | Server Side Code | context',
    'color:#77dcfd',
    context
  );

  return {
    props: {
      username: 'Max',
    },
  };
}
