import { useState } from "react";
import Navbar from "./Navbar";
import bajaj from "./bajaj.png";
import mahindra from "./mahindra.png";
import utkarsh from "./utkarsh.png";
import sriram from "./sriram.png";
import bajaj_tick from "./bajaj_tick.png";
import mahindra_tick from "./mahindra_tick.png";
import utkarsh_tick from "./utkarsh_tick.png";
import sriram_tick from "./sriram_tick.png";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import TimeLineChart from "./FDMaturityTimeline";
const Home = () => {
  // Register the required components
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: [
      "Bajaj Finserv",
      "Shriram Finance",
      "Mahindra Finance",
      "Utkarsh small Finance Bank",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [25, 20, 15, 40],
        backgroundColor: [
          "rgba(108,99,255)",
          "rgba(250,157,23)",
          "rgba(185,198,6)",
          "rgba(89,203,211)",
        ],
        borderColor: [
          "rgba(255,255,255)",
          "rgba(255,255,255)",
          "rgba(255,255,255)",
          "rgbs(255,255,255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <Navbar />
      <div className="content">
        <h1 className="title">Welcome, Johan Paul</h1>
        <div className="section1">
          <div className="fdportfolio">
            <div className="flexRow">
              {" "}
              <div>
                <h3>Your FD Portfolio </h3>
              </div>
              <div>
                <select className="grey-text dropDown">
                  <option value="0">Deposit Amt</option>
                </select>
              </div>
            </div>
            <div>
              {" "}
              <div className="chart">
                {" "}
                <Pie data={data} options={options} />
              </div>
            </div>
          </div>
          <div className="fdmaturity">
            <div className="flexRow">
              {/* <div><h3>FD Maturity Timeline</h3></div> */}
              <div>
                <TimeLineChart />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section2">
            <div className="utkarsh">
              <div>
                <ul>
                  <li>
                    <div className="flexRow">
                      <div>
                        <img src={utkarsh} alt="utkarsh" className="icon" />{" "}
                      </div>
                      <div>Utkarsh small Finance Bank</div>
                    </div>
                  </li>
                  <li className="li-none">
                    <div className="flexRow">
                      <div className="utkarsh-div">
                        {/* <img src="../src/utkarsh_tick.png" alt="utkarsh" /> */}
                        <img src={utkarsh_tick} alt="utkarsh" />
                        <span>Highest Intrest Rate</span>
                      </div>
                      <div className="utkarsh-div">
                        {/* <img src="../src/utkarsh_tick.png" alt="utkarsh" /> */}
                        <img src={utkarsh_tick} alt="utkarsh" />
                        <span>RBI Insured</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex-space">
                      {" "}
                      <div>
                        <li className="grey-text">Interest Upto</li>
                        <li className="black-text">9.10% p.a</li>
                      </div>
                      <div>
                        <button className="utkarsh-btn">Book Now</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bajaj">
              <div>
                <ul>
                  <li>
                    <div className="flexRow">
                      <div>
                        <img src={bajaj} alt="bajaj" className="icon" />{" "}
                      </div>
                      <div>Bajaj Finserv</div>
                    </div>
                  </li>
                  <li className="li-none">
                    <div className="flexRow">
                      <div className="bajaj-div">
                        {/* <img src="../src/utkarsh_tick.png" alt="utkarsh" /> */}
                        <img src={bajaj_tick} alt="bajaj" />
                        <span>Crisil AAA Rated</span>
                      </div>
                      <div className="bajaj-div">
                        {/* <img src="../src/utkarsh_tick.png" alt="utkarsh" /> */}
                        <img src={bajaj_tick} alt="bajaj" />
                        <span>No Video KYC required</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex-space">
                      {" "}
                      <div>
                        <li className="grey-text">Interest Upto</li>
                        <li className="black-text">8.80% p.a</li>
                      </div>
                      <div>
                        <button className="bajaj-btn">Book Now</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="bajaj">
              <div>
                <div className="flexRow">
                  <div>
                    <img src={bajaj} alt="bajaj" className="icon" />{" "}
                  </div>
                  <div>Bajaj Finserv</div>
                </div>
              </div>
            </div> */}
          </div>{" "}
          <div className="section4">
            <div className="flexRow right-container">
              <div className="flexColumn">
                <div className="right-sub-container">
                  <b>Video Player</b>
                </div>
                <div>
                  <div className="flexRow">
                    <div className="flexColumn right-sub-container">
                      {" "}
                      <div className="grey-text "> Scheduled on</div>{" "}
                      <div className="grey-box">
                        <div className="black-date right-sub-container">28</div>
                        <div className="box black-text">Oct,2023</div>
                      </div>
                    </div>
                    <div className="black-text">
                      <div className="right-sub-container">Utkarsh SF Bank FD Plan 2</div>
                      <div className="flexRow">
                        {" "}
                        <div className="flexColumn right-sub-container">
                          <div className="grey-text">Deposit Amt</div>
                          <div className="black-text">Rs. 20,000</div>
                        </div>
                        <div className="flexColumn right-sub-container">
                          <div className="grey-text">Tenure</div>
                          <div className="black-text">2 Years</div>
                        </div>
                        <div className="flexColumn right-sub-container">
                          <div className="grey-text">Interest Rate</div>
                          <div className="black-text">9.10%</div>
                        </div>
                      </div>
                    </div>
                  </div>
            
                </div>
                <div className="flexRow">
                  <div>
                    <input type="button" name="complete" value="Complete Now"  className="btn-blue right-sub-container"/>
                  </div>
                  <div>
                    <input type="button" name="reschedule" value="Rescedule"  className="btn-white right-sub-container"/>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="flexRow right-container">
              {" "}
              <div className="flexColumn">
                <div>
                  <b>Pending Payment</b>
                </div>
                <div>
                  <div className="flexRow">
                    <div className="flexColumn right-sub-container">
                      {" "}
                      <div className="grey-text"> Pay By</div>{" "}
                      <div className="grey-box">
                        <div className="black-date right-sub-container">30</div>
                        <div className="box black-text">Oct,2023</div>
                      </div>
                    </div>
                    <div className="black-text">
                   <div className="right-sub-container">  Bajaj Finserv Corp FD 1</div>
                      <div className="flexRow">
                        {" "}
                        <div className="flexColumn right-sub-container">
                          <div className="grey-text">Deposit Amt</div>
                          <div className="black-text">Rs. 25,000</div>
                        </div>
                        <div className="flexColumn right-sub-container">
                          <div className="grey-text">Tenure</div>
                          <div className="black-text">18 Years</div>
                        </div>
                        <div className="flexColumn right-sub-container">
                          <div className="grey-text">Interest Rate</div>
                          <div className="black-text">8.10%</div>
                        </div>
                      </div>
                    </div>
                  </div>
              
                </div>
                <div className="flexRow">
                  <div>
                    <input type="button" name="paynow" value="Pay Now" className="btn-blue right-sub-container"/>
                  </div>
                  <div>
                    <input type="button" name="cancel" value="Cancel Application" className="btn-white right-sub-container"/>
                  </div>
                </div>
                <hr />
              </div>{" "}
         
            </div>
            <div className="flexRow right-container">
              {" "}
              <div className="flexColumn">
                <div>
                  <b>Upcoming FD Maturity</b>
                </div>
                <div>
                  <div className="flexRow">
                    <div className="flexColumn right-sub-container">
                      {" "}
                      <div className="grey-text"> Renew By</div>{" "}
                      <div className="grey-box">
                        <div className="black-date right-sub-container">30</div>
                        <div className="box black-text">Oct,2023</div>
                      </div>
                    </div>
                    <div className="black-text">
                      <div className="right-sub-container">Shriram Finanace FD Plan 1</div>
                      <div className="flexRow">
                        {" "}
                        <div className="flexColumn right-sub-container">
                          <div className="grey-text">Deposit Amt</div>
                          <div className="black-text">Rs. 25,000</div>
                        </div>
                        <div className="flexColumn right-sub-container">
                          <div className="grey-text">Tenure</div>
                          <div className="black-text">18 Years</div>
                        </div>
                        <div className="flexColumn right-sub-container">
                          <div className="grey-text">Interest Rate</div>
                          <div className="black-text">8.10%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="flexRow">
                  <div>
                    <input type="button" name="renew" value="Renew Now"  className="btn-blue right-sub-container" />
                  </div>
                  <div>
                    <input type="button" name="compare" value="Compare other FDs" className="btn-white right-sub-container" />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="section3">
            <div className="sriram">
              <div>
                <ul>
                  <li>
                    <div className="flexRow">
                      <div>
                        <img src={sriram} alt="sriram" className="icon" />{" "}
                      </div>
                      <div>Shriram Finance</div>
                    </div>
                  </li>
                  <li className="li-none">
                    <div className="flexRow">
                      <div className="sriram-div">
                        {/* <img src="../src/utkarsh_tick.png" alt="utkarsh" /> */}
                        <img src={sriram_tick} alt="sriram" />
                        <span>Crisil AAA Rated</span>
                      </div>
                      <div className="sriram-div">
                        {/* <img src="../src/utkarsh_tick.png" alt="utkarsh" /> */}
                        <img src={sriram_tick} alt="sriram" />
                        <span>No Video KYC required</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex-space">
                      {" "}
                      <div>
                        <li className="grey-text">Interest Upto</li>
                        <li className="black-text">8.80% p.a</li>
                      </div>
                      <div>
                        <button className="sriram-btn">Book Now</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mahindra">
              <div>
                <ul>
                  <li>
                    <div className="flexRow">
                      <div>
                        <img src={mahindra} alt="mahindra" className="icon" />{" "}
                      </div>
                      <div>Mahindra Finance</div>
                    </div>
                  </li>
                  <li className="li-none">
                    <div className="flexRow">
                      <div className="mahindra-div">
                        {/* <img src="../src/utkarsh_tick.png" alt="utkarsh" /> */}
                        <img src={mahindra_tick} alt="mahindra" />
                        <span>Crisil AAA Rated</span>
                      </div>
                      <div className="mahindra-div">
                        {/* <img src="../src/utkarsh_tick.png" alt="utkarsh" /> */}
                        <img src={mahindra_tick} alt="mahindra" />
                        <span>No Video KYC required</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex-space">
                      {" "}
                      <div>
                        <li className="grey-text">Interest Upto</li>
                        <li className="black-text">8.80% p.a</li>
                      </div>
                      <div>
                        <button className="mahindra-btn">Book Now</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="flexColumn">
          <div className="getans">Get Answer</div>
          <div className="ans">to all your questions</div>
        </div>
        <div className="flexRow">
          <div className="answerdiv">
            <div>
              <h2> How FDs are taxed</h2>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="readmore">Read more...</div>
          </div>
          <div className="answerdiv">
            <div>
              <h2> How FDs are taxed</h2>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="readmore">Read more...</div>
          </div>
          <div className="answerdiv">
            <div>
              <h2> How FDs are taxed</h2>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="readmore">Read more...</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
