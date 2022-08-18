<template>
  <div class="viewWrapper">
    <h2>Education</h2>
    <div class="aboutWrapper">
      <a href="/"><img src="../assets/img/chief.png" alt="Illinois Chief" /></a>
      <ul>
        <li><b>University of Illinois at Urbana-Champaign</b></li>
        <br />
        <li>M.C.S. in Data Science</li>
        <li>B.Sc. in Accountancy (Honor)</li>
        <li>B.Sc. in Finance (Honor)</li>
        <li>Minor in Computer Science</li>
      </ul>
    </div>
    <hr />
    <br />
    <h2>Employment</h2>
    <div class="aboutWrapper">
      <ul>
        <li>2021-Current</li>
        <li>2017-2021</li>
        <li>2014-2017</li>
        <li>2012-2013</li>
      </ul>
      <ul>
        <li><b>HYUNDAI CAPITAL SERVICES – SENIOR DATA SCIENTIST </b></li>
        <li><b>EY CONSULTING – SENIOR CONSULTANT, DATA &amp; ANALYTICS</b></li>
        <li><b>HANWHA CHEMICAL CO. – MANAGER, FIANCIAL ACCOUNTING</b></li>
        <li>
          <b
            >GREEN LIGHT TRADING LLC – DERIVATIVE TRADER, HIGH-FREQUENCY
            TRADING</b
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",
});
</script>

<style scoped lang="scss">
hr {
  margin-left: 0px;
}

.aboutWrapper {
  display: flex;
  padding: 20px 0px;
}

.aboutWrapper > a > img, ul:first-child {
  width: 120px;
  margin-right: 20px;
}

</style>
