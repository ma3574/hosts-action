const core = require('@actions/core');
const exec = require('@actions/exec');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const hosts = core.getInput('hosts');
    core.info(`Add to hosts: \n${hosts}`);
    exec.exec(`echo ${hosts} >> /etc/hosts`)
    exec.exec(`echo '122.0.0.1 nano.com' >> /etc/hosts`)
    exec.exec(`echo 'hosts file content:' && cat /etc/hosts`)
    // core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    // core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
