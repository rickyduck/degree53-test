export default interface IListing {
  id: number;
  html_url: string;
  name: string;
  owner: {
    html_url: string;
    avatar_url: string;
    login: string;
  };
}
