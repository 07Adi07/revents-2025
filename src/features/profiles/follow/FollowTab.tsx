import React, { useEffect } from "react";
import { useAppSelector } from "../../../app/store/store";
import { Grid, Header, Tab } from "semantic-ui-react";
import FollowCard from "./FollowCard";
import { useFireStore } from "../../../app/hooks/firestore/useFirestore";

type Props = {
  profileId: string;
  activeTab: number;
};

export default function FollowTab((profileId, activeTab): Props) {
  const { data, status } = useAppSelector((state) => state.follows);
const {loadCollection: loadFollowing} = useFireStore(`profiles/${profileId}/following`);
const {loadCollection: loadFollowers} = useFireStore(`profiles/${profileId}/followers`);

useEffect (
  () => {
    if (activeTab === 3){
      loadFollowers(actions)
    }
    if (activeTab === 4){
      loadFollowing(actions)
    }
  }, [activeTab, loadFollowers, loadFollowing]
)

  return (
    <Tab.Pane loading={status === "loading"}>
      <Grid>
        <Grid.Column width={16}>
          <Header floated='left' icon='user' content={activeTab === 3 ? 'Followers' : 'Following'} />
        </Grid.Column>
        <Grid.Column>
          <Card.Group itemsPerRow={16}>
            {data.map(profile => (
              <FollowCard profile={profile} key={profile.id}/>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
}
