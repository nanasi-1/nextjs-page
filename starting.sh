yarn install

# 常時yarn dev用
tmux new -d -s default
tmux rename-window server
tmux send-keys -t default:0 "yarn dev" Enter

# 実際に使う用
tmux new-window -t default
tmux rename-window client
tmux a -t default:1