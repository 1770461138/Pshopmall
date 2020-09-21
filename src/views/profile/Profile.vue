<template>
  <div id="profile">
    <NavBar class="profile-nav">
      <div slot="middle-nav">我的档案</div>
    </NavBar>
    <ProfileHeader/>
    <ProfileTopInfo/>
    <ProfileMiddleInfo/>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar'
import ProfileHeader from './profilechildcomps/ProfileHeader'
import ProfileTopInfo from './profilechildcomps/ProfileTopInfo'
import ProfileMiddleInfo from './profilechildcomps/ProfileMiddleInfo'
export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileHeader,
    ProfileTopInfo,
    ProfileMiddleInfo
  }
}
</script>
<style>
  #profile {
    height: 100vh;
  }
  .profile-nav {
    background: rgb(248, 99, 124);
    color: #fff;
  }
</style>