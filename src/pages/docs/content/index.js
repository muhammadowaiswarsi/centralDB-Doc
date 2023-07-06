import React from 'react';
import CodeSnippet from '../../../components/codeSnippet';
import '../style.css';

const Content = () => {
  return (
    <div class='container mt-3 m-bottom'>
      <div class='row'>
        <div class='col-lg-9 col-lg-offset-2 col-md-11 col-md-offset-1 m-auto'>
          <div id='C7-Central-Generation-Seven'>
            <h1>C7 (Central' Generation Seven)</h1>
            <p>
              C7 (Central' Generation Seven) is a blockchain based on the X11 algorithm, designed
              for transmitting data through the block explorer. We have opted to remove Mysql and
              other databases in favor of a decentralized database (C7) to optimize trust. This
              allows us to decentralize our own web and mobile apps, as well as those of others. Be
              self-sufficient in everything.
            </p>
            <img
              src='https://raw.githubusercontent.com/openc7/c7/main/background.png'
              alt='alt text'
              style={{ maxWidth: '100%' }}
            />
            <CodeSnippet text={'sudo apt-get update'} />
            <CodeSnippet text={'sudo apt-get upgrade'} />
          </div>
          <div className='steps' id='Required-dependencies'>
            <h2>Install the required dependencies</h2>
            <CodeSnippet
              text={
                ' sudo apt-get install build-essential libtool autotools-dev automake pkg-config libssl-dev libevent-dev bsdmainutils python3 '
              }
            />
            <CodeSnippet
              text={
                ' libboost-system-dev libboost-filesystem-dev libboost-chrono-dev libboost-test-dev libboost-thread-dev libboost-all-dev '
              }
            />
            <CodeSnippet text={' libboost-program-options-dev'} />
            <CodeSnippet
              text={
                'sudo apt-get install libminiupnpc-dev libzmq3-dev libprotobuf-dev protobuf-compiler unzip software-properties-common'
              }
            />
          </div>
          <div className='steps' id='Install-Berkeley-DB'>
            <h2>Install Berkeley DB for C7 (Central Generation Seven)</h2>
            <CodeSnippet text={'  sudo add-apt-repository ppa:bitcoin/bitcoin '} />
            <CodeSnippet text={'  sudo apt-get update '} />
            <CodeSnippet text={' sudo apt-get install libdb4.8-dev libdb4.8++-dev'} />
          </div>
          <div className='steps' id='Download-the-C7-and-tools-from-Openc7'>
            <h2>Download the C7 and tools from Openc7</h2>
            <p>
              Manually Install <span style={{ color: 'blue' }}> Download daemon </span>
            </p>
            <CodeSnippet
              text={
                ' wget "api.server.openc7.com/daemon/openc7-daemon-linux.tar.gz" -O openc7-daemon-linux.tar.gz '
              }
            />
            <p>
              Manually Install <span style={{ color: 'blue' }}> Download GT C7 </span>
            </p>
            <CodeSnippet
              text={
                ' wget "api.server.openc7.com/daemon/c7-qt-linux.tar.gz" -O c7-qt-linux.tar.gz '
              }
            />
          </div>
          <div className='steps' id='Extract-tar-files'>
            <h2>Extract the tar files</h2>
            <CodeSnippet text={' tar -xzvf c7-daemon-linux.tar.gz'} />
            <CodeSnippet text={' tar -xzvf c7-qt-linux.tar.gz'} />
          </div>
          <div className='steps' id='Install-OpenC7-tools'>
            <h2>Install the OpenC7 and tools</h2>
            <CodeSnippet text={'  sudo mv c7 c7-cli c7-tx /usr/bin/'} />
          </div>
          <div className='steps' id='Create-config-file'>
            <h2 className='mb-4'>Create the config file</h2>
            <CodeSnippet text={'  mkdir $HOME/.c7'} />
            <CodeSnippet text={' nano $HOME/.c7/c7.conf'} />
          </div>
          <div className='steps' id='Paste-following-lines-in-c7'>
            <h2>Paste the following lines in c7.conf</h2>
            <CodeSnippet
              text={
                'rpcuser=???\nrpcpassword=???\nrpcallowip=127.0.0.1\nrpcport=10037\nlisten=1\nserver=1\naddnode=node.openc7.com'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

export const sidebarLinks = [
  { key: '1', value: 'Generation Seven', id: '#C7-Central-Generation-Seven' },
  { key: '2', value: 'Required dependencies', id: '#Required-dependencies' },
  { key: '3', value: 'Install Berkeley DB', id: '#Install-Berkeley-DB' },
  { key: '4', value: 'Download C7 tools', id: '#Download-the-C7-and-tools-from-Openc7' },
  { key: '5', value: 'Extract tar files', id: '#Extract-tar-files' },
  { key: '6', value: 'Install OpenC7 tools.', id: '#Install-OpenC7-tools' },
  { key: '7', value: 'Create config file', id: '#Create-config-file' },
  { key: '8', value: 'Paste lines in c7.conf', id: '#Paste-following-lines-in-c7' },
];
