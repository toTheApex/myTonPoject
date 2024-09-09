import { address, toNano } from "@ton/core";
import { MainContract } from "../wrappers/MainContract";
import { compile, NetworkProvider } from "@ton/blueprint";

export async function run(provider: NetworkProvider) {
  const myContract = MainContract.createFromConfig(
    {
      number: 0,
      address: address("0QDGrztskyrAXVPyttSBuU6oeeZXbKXndzm2wgdAZOWCBLUM"),
      owner_address: address(
        "0QDGrztskyrAXVPyttSBuU6oeeZXbKXndzm2wgdAZOWCBLUM"
      ),
    },
    await compile("MainContract")
  );

  const openedContract = provider.open(myContract);

  openedContract.sendDeploy(provider.sender(), toNano("0.05"));

  await provider.waitForDeploy(myContract.address);
}


//EQCnX5WFgrfw0kjCvmxrUoGFmrr9I1z36BqJcM1gPxfo0S3K contract address