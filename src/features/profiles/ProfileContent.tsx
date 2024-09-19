import { Tab } from "semantic-ui-react";
import ProfileAbout from "./ProfileAbout";
import { Profile } from "../../app/types/profile";
import ProfilePhotos from "./ProfilePhotos";
import ProfileEvents from "./ProfileEvents";
import FollowTab from "./follow/FollowTab";

type Props = {
  profile: Profile;
};

export default function ProfileContent({ profile }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const panes = [
    { MenuItem: "About", render: () => <ProfileAbout profile={profile} /> },
    { MenuItem: "Photos", render: () => <ProfilePhotos profile={profile} /> },
    { MenuItem: "Events", render: () => <ProfileEvents profile={profile} /> },
    {
      MenuItem: "Followers",
      render: () => <FollowTab profileId={profile.id} activeTab={activeTab} />,
    },
    {
      MenuItem: "Following",
      render: () => <FollowTab profileId={profile.id} activeTab={activeTab} />,
    },
  ];

  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='right'
      panes={panes}
      onTabChange={(_e, data) => setActiveTab(data.activeIndex as number)}
    />
  );
}
