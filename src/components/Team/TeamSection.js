import React, { useEffect, useState } from "react";
import axiosInstance from "../../helper/axios";
import Axios from "axios";

function TeamSection() {
  const [team, setTeam] = useState();

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/teams`, {
          cancelToken: source.token,
        });
        setTeam((await response).data.teams);
      } catch (error) {
        if (!Axios.isCancel(error)) {
          throw error;
        }
      }
      return () => {
        source.cancel();
      };
    };
    loadData();
  }, []);
  console.log(team);
  return (
    <div>
      <div className="team-section">
        <div className="team-heading">
          <p className="team-heading-title">Meet our team</p>
          <p>
            We have a team of experienced staffs worked on different fields of
            hotel management for more than 5 years. The team is friendly,
            dedicated and highly service oriented. Our staffs will be more than
            happy to welcome you.
          </p>
        </div>
        <div className="team-all">
          {team &&
            team.map((team) => (
              <div className="team-member">
                <div className="row">
                  <div className="col-md-3">
                    <div className="team-member-image">
                      <img src={team.image} />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="team-member-text">
                      <div className="team-member-name">{team.title}</div>
                      <div className="team-member-position">
                        {team.designation}
                      </div>
                      <div
                        className="para"
                        dangerouslySetInnerHTML={{ __html: team.description }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
