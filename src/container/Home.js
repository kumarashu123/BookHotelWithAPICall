import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MemberList from "../component/MemberList";
import MemberDetails from "../component/MemberDetails";
import HotelDetails from "../component/HotelDetails";
import { getHotelList } from "../actions/hotel";
import { getMemberList, getMemberDetails } from "../actions/member";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleMemberClicked = this.handleMemberClicked.bind(this);
    this.handleRoomBookClicked = this.handleRoomBookClicked.bind(this);
  }

  componentDidMount() {
    if (this.props.isAdmim) {
      this.props.getMemberList();
    } else {
      this.props.getHotelList();
    }
  }

  handleMemberClicked(data) {
    this.props.getMemberDetails(data);
  }

  handleRoomBookClicked() {
    alert("Booking is not available!!!!!!!!");
  }

  render() {
    return (
      <div>
        {this.props.isAdmim ? (
          <div className="row">
            <MemberList
              memberList={this.props.memberList}
              handleMemberClicked={this.handleMemberClicked}
            />
            <MemberDetails memberDetail={this.props.memberDetails} />
          </div>
        ) : (
          <div>
            <HotelDetails
              hotelDetails={this.props.hotelList}
              handleBookRoom={this.handleRoomBookClicked}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAdmim: state.login.user.is_admin,
  memberList: state.member.memberList,
  memberDetails: state.member.memberDetails,
  hotelList: state.hotel.hotelList
});

export default (Home = connect(
  mapStateToProps,
  { getMemberList, getMemberDetails, getHotelList }
)(Home));
