module.exports = function (RED) {

    function GiftConfiguratorNode(n) {
        RED.nodes.createNode(this, n);
        this.name = n.name;
        this.s1 = n.s1
        this.s2 = n.s2
        this.s3 = n.s3
        this.deviceList = n.deviceList || [];
        
    }
    RED.nodes.registerType("gift-configurator", GiftConfiguratorNode);

}