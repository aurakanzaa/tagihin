<template>
    <b-container>
    <b-row>
        <b-col cols="6" md="4"></b-col>
        <b-col cols="6" md="4">
            <h2>Riwayat Transaksi</h2>
            <b-tabs card v-model="tabIndex">
            
            <!-- ===PAID=== -->
            <b-tab title="Paid" :title-link-class="linkClass(0)">
                <b-container class="bv-example-row">
                    <b-row>
                        <b-col class="left"><b>INV 110</b></b-col>
                        <b-col class="right"><b>10.000</b></b-col>
                    </b-row>
                    <b-row>
                        <b-col class="left">Teguh</b-col>
                        <b-col class="right">1 Agustus 2018</b-col>
                    </b-row>
                    <hr>
                    <b-row>
                        <b-col class="left"><b>INV 110</b></b-col>
                        <b-col class="right"><b>10.000</b></b-col>
                    </b-row>
                    <b-row>
                        <b-col class="left">Teguh</b-col>
                        <b-col class="right">1 Agustus 2018</b-col>
                    </b-row>
                    <hr>
                    <b-row>
                        <b-col class="left"><b>INV 110</b></b-col>
                        <b-col class="right"><b>10.000</b></b-col>
                    </b-row>
                    <b-row>
                        <b-col class="left">Teguh</b-col>
                        <b-col class="right">1 Agustus 2018</b-col>
                    </b-row>
                </b-container>
            </b-tab>

            <!-- ===OPEN=== -->
            <b-tab title="Overdue" :title-link-class="linkClass(1)">
                <b-container class="bv-example-row">
                    <b-row>
                        <b-col class="left"><b>INV 112</b></b-col>
                        <b-col class="right"><b>10.000</b></b-col>
                    </b-row>
                    <b-row>
                        <b-col class="left">Teguh</b-col>
                        <b-col class="right">1 Agustus 2018</b-col>
                    </b-row>
                    <hr>
                    <b-row>
                        <b-col class="left"><b>INV 112</b></b-col>
                        <b-col class="right"><b>10.000</b></b-col>
                    </b-row>
                    <b-row>
                        <b-col class="left">Teguh</b-col>
                        <b-col class="right">1 Agustus 2018</b-col>
                    </b-row>
                    <hr>
                    <b-row>
                        <b-col class="left"><b>INV 112</b></b-col>
                        <b-col class="right"><b>10.000</b></b-col>
                    </b-row>
                    <b-row>
                        <b-col class="left">Teguh</b-col>
                        <b-col class="right">1 Agustus 2018</b-col>
                    </b-row>
                </b-container>
            </b-tab>

            <!-- ====OPEN=== -->
            <b-tab title="Open" :title-link-class="linkClass(2)">
                <b-container class="bv-example-row">
                    <b-row>
                        <b-col class="left"><b>INV 115</b></b-col>
                        <b-col class="right"><b>10.000</b></b-col>
                    </b-row>
                    <b-row>
                        <b-col class="left">Teguh</b-col>
                        <b-col class="right">1 Agustus 2018</b-col>
                    </b-row>
                    <hr>
                    <b-row>
                        <b-col class="left"><b>INV 115</b></b-col>
                        <b-col class="right"><b>10.000</b></b-col>
                    </b-row>
                    <b-row>
                        <b-col class="left">Teguh</b-col>
                        <b-col class="right">1 Agustus 2018</b-col>
                    </b-row>
                    <hr>
                    <b-row>
                        <b-col class="left"><b>INV 115</b></b-col>
                        <b-col class="right"><b>10.000</b></b-col>
                    </b-row>
                    <b-row>
                        <b-col class="left">Teguh</b-col>
                        <b-col class="right">1 Agustus 2018</b-col>
                    </b-row>
                </b-container>
            </b-tab>
            </b-tabs>

        </b-col>
        <b-col cols="6" md="4"></b-col>
    </b-row>
</b-container>
</template>

<style lang="">
    .left{
        text-align:left;
    }
    .right{
        text-align:right;
    }
    h2{
        text-align:left;
        color: black;
        margin-left:15px;
    }
</style>


<script>
    export default {
  data () {
    return {
      tabIndex: 0
    }
  },
  methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    }
  }
}
</script>