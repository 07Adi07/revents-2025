import { Tab } from "semantic-ui-react";
import ProfileAbout from "./ProfileAbout";
import { Profile } from "../../app/types/profile";
import ProfilePhotos from "./ProfilePhotos";
import ProfileEvents from "./ProfileEvents";

type Props = {
  profile: Profile;
};

export default function ProfileContent({ profile }: Props) {
  const panes = [
    { MenuItem: "About", render: () => <ProfileAbout profile={profile} /> },
    { MenuItem: "Photos", render: () => <ProfilePhotos profile={profile} /> },
    { MenuItem: "Events", render: () => <ProfileEvents profile={profile} /> },
    { MenuItem: "Followers", render: () => <Tab.Pane>Followers</Tab.Pane> },
    { MenuItem: "Following", render: () => <Tab.Pane>Following</Tab.Pane> },
  ];

  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='right'
      panes={panes}
    />
  );
}
