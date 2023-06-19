/* eslint-disable no-unused-vars */
type CallablePath = (...params: string[]) => string;
type Path = CallablePath | string;

export interface IAPI {
  name: string;
  path: any;
  APIs?: IAPI[];
}

const apis: IAPI[] = [
  {
    name: 'PWA',
    path: '/pwa',
    APIs: [
      {
        name: 'SOLID_API',
        path: '/api',
        APIs: [
          {
            name: 'SOLID_VERSION1',
            path: '/v1',
            APIs: [
              {
                name: 'USERS',
                path: '/users',
                APIs: [
                  {
                    name: 'IDEMTITY',
                    path: '/Identity',
                    APIs: [
                      {
                        name: 'SEND_OTP',
                        path: '/otp'
                      },
                      {
                        name: 'VERIFY_USER',
                        path: '/verify',
                      },
                      {
                        name: 'REFRESH_TOKEN',
                        path: '/refresh'
                      },
                      {
                        name: 'REVOKE',
                        path: '/revoke'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'PWA',
    path: '/pwa',
    APIs: [
      {
        name: 'CLUB',
        path: '/club',
        APIs: [
          {
            name: 'API',
            path: '/api',
            APIs: [
              {
                name: 'VERSION1',
                path: '/v1',
                APIs: [
                  {
                    name: 'USERACTIVITY',
                    path: '/UserActivity',
                    APIs: [
                      {
                        name: 'GET_USER_TRANSACTIONS',
                        path: '/GetUserTransactions'

                      },
                    ],
                  },
                  {
                    name: 'REWARD_CATEGORY',
                    path: '/RewardCategory',
                    APIs: [
                      {
                        name: 'GET_REWARD_CATEGORY_BY_CLUB_ID',
                        path: (clubId: string) => `/GetByClubId?clubId=${clubId}`,
                      },
                    ],
                  },
                  {
                    name: 'SLIDER',
                    path: '/slider',
                    APIs: [
                      {
                        name: 'GET_SLIDER_BY_CLUB_ID',
                        path: (clubId: string) => `/GetSliderByClubId?clubId=${clubId}`,
                      },
                    ]
                  },
                  {
                    name: 'CAMPAIGN',
                    path: '/Campaign',
                    APIs: [
                      {
                        name: 'GET_CAMPAIGN_BY_ID',
                        path: (id: string) => `/GetById?id=${id}`,
                      },
                      {
                        name: 'GET_CAMPAIGN_LIST_BY_ID',
                        path: (clubId: string) => `/GetByClubId?clubId=${clubId}`,
                      },
                    ],
                  },
                  {
                    name: 'FREQUENTLYQUESTION',
                    path: '/FrequentlyQuestion',
                    APIs: [
                      {
                        name: 'GET_FREGUENTLY_QUESTION',
                        path: (clubId: string) => `/GetEnable?clubId=${clubId}`,
                      },
                    ],
                  },
                  {
                    name: 'CAMPAIGN_USER',
                    path: '/CampaignUser',
                    APIs: [
                      {
                        name: 'GET_CURRENT_USER_INFO',
                        path: (campaignId: string) =>
                          `/GetCurrentUserInfo?campaignId=${campaignId}`,
                      },
                      {
                        name: 'ACCEPT_RULES',
                        path: '',
                      },
                      {
                        name: 'IS_USER_ACCEPTED_RULES',
                        path: (campaignId: string) =>
                          `/CurrentUserIsAccepted/${campaignId}`,
                      },
                    ],
                  },
                  {
                    name: 'REWARD',
                    path: '/reward',
                    APIs: [
                      {
                        name: 'GET_REWARDS',
                        path: '/GetForCurrentUserByClubId',
                      },
                      {
                        name: 'GET_REWARD_BY_ID',
                        path: (id: string) => `/GetById?id=${id}`,
                      },
                      {
                        name: 'GET_SCORE_RANGES',
                        path: '/scoreRanges',
                      },
                    ],
                  },
                  {
                    name: 'CLUBGUIDLINE',
                    path: '/ClubGuidline',
                    APIs: [
                      // {
                      //   name: 'GET_TEXTHELP',
                      //   path: '/GetAll ',
                      // },
                      {
                        name: 'GET_TEXTHELP',
                        path: (clubId: string) => `/GetByClubId?clubId=${clubId}`,
                      },
                    ],
                  },
                  {
                    name: 'BURN',
                    path: '/BurnPoint',
                    APIs: [
                      {
                        name: 'BURN_POINTS',
                        path: '/BurnPoint',
                      },
                    ],
                  },
                  {
                    name: 'USERPOINT',
                    path: '/UserPoint',
                    APIs: [
                      {
                        name: 'USER_POINT_IN_CAMPAIGN',
                        path: (id: string) => `/UserPointInCampaign?CampaignId=${id}`,
                      },
                      {
                        name: 'USER_POINT_TO_LUCKIN_CAMPAIGN',
                        path: '/UserPointToLuckInCampaign',
                      }
                    ]
                  },
                  {
                    name: 'SURVEY',
                    path: '/Survey',
                    APIs: [
                      {
                        name: 'CURRENT_USER_PARTICIPATE_IN_ACTIVE_SURVEY',
                        path: (clubId: string) => `/CurrentUserParticipateInActiveSurvey/${clubId}`,
                      },
                      {
                        name: 'GET_ACTIVE_BY_CLUBID',
                        path: (clubId: string) => `/GetActiveByClubId?clubId=${clubId}`,
                      }
                    ],
                  },
                  {
                    name: 'SURVEY_QUESTION',
                    path: '/SurveyQuestion',
                    APIs: [
                      {
                        name: 'GET_SURVEY_QUESTION',
                        path: '/GetBySurveyId',
                      },
                    ],
                  },
                  {
                    name: 'SURVEY_ANSWER',
                    path: '/SurveyAnswer',
                    APIs: [
                      {
                        name: 'ADD_LIST',
                        path: '/AddList',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const convert = (apiItems: IAPI[]): Map<string, IAPI> => {
  const apisMap: Map<string, IAPI> = new Map();

  (function makeIterableAPIS(items, prefix = '') {
    const currentPrefix = prefix;
    items.forEach((item) => {
      let apiObj: IAPI;
      if (item.APIs) {
        const itemPrefix = currentPrefix + item.path;
        makeIterableAPIS(item.APIs, itemPrefix as string);
      } else {
        let path: Path;
        if (typeof item.path === 'function') {
          path = (...rest: string[]): string =>
            currentPrefix + item.path(...rest);
        } else {
          path = currentPrefix + item.path;
        }
        apiObj = {
          ...item,
          path,
        };
        apisMap.set(item.name, apiObj);
      }
    });
  })(apiItems);
  return apisMap;
};
export default convert(apis);
